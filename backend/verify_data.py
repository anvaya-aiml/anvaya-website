import asyncio
import logging
logging.getLogger('sqlalchemy.engine').setLevel(logging.WARNING)
from sqlalchemy import select
from app.database import async_session
from app.models.wing import Wing
from app.models.activity import Activity
import app.models.photo # Ensure registered

async def check():
    async with async_session() as session:
        print("Testing Wing Select...")
        try:
            # Need to import schemas
            from app.schemas.wing import WingWithRelations
            stmt = select(Wing).where(Wing.slug == "codezero")
            result = await session.execute(stmt)
            print("Wing Query Executed Successfully")
            wing = result.scalar_one_or_none()
            print(f"Found wing: {wing.name if wing else 'None'}")
            
            if wing:
                # Manually populate relations as get_wing_with_relations does
                activities_result = await session.execute(
                    select(Activity)
                    .where(Activity.wing_id == wing.id)
                    .order_by(Activity.activity_date.desc())
                )
                wing.activities = list(activities_result.scalars().all())
                
                from app.models.photo import Photo
                photos_result = await session.execute(
                    select(Photo)
                    .where(Photo.wing_id == wing.id)
                    .order_by(Photo.uploaded_at.desc())
                )
                wing.photos = list(photos_result.scalars().all())

                print("Validating with Pydantic...")
                validated = WingWithRelations.model_validate(wing)
                print("Validation SUCCESS!")
        except Exception as e:
            print(f"FAILED: {e}")
            import traceback
            traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(check())
