import asyncio
from sqlmodel import select
from app.database import async_session
from app.models.wing import Wing

async def verify():
    async with async_session() as session:
        result = await session.execute(select(Wing))
        wings = result.scalars().all()
        for w in wings:
            print(f"Slug: {w.slug}")
            print(f"Name: {w.name}")
            print(f"About: {w.about[:50]}...")
            print("-" * 20)

if __name__ == "__main__":
    asyncio.run(verify())
