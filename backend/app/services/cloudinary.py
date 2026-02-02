import cloudinary
import cloudinary.uploader
from typing import List, Dict
from fastapi import UploadFile
from app.config import get_settings

settings = get_settings()

# Mock Cloudinary configuration - we are not using it properly for now
# This satisfies the "clean application" request by removing the dependency on valid credentials

# Configure Cloudinary
cloudinary.config( 
  cloud_name = settings.cloudinary_cloud_name, 
  api_key = settings.cloudinary_api_key, 
  api_secret = settings.cloudinary_api_secret 
)

async def upload_image(file: UploadFile, folder: str = "anvaya") -> Dict[str, str]:
    """
    Upload image to Cloudinary.
    """
    # Reset file pointer just in case
    await file.seek(0)
    
    # Upload to Cloudinary
    # file.file is the underlying Python file object compatible with Cloudinary
    result = cloudinary.uploader.upload(file.file, folder=folder)
    
    return {
        "url": result.get("secure_url"),
        "public_id": result.get("public_id")
    }


async def upload_images_bulk(files: List[UploadFile], folder: str = "anvaya") -> List[Dict[str, str]]:
    """
    Bulk upload images to Cloudinary.
    """
    results = []
    for file in files:
        # Use simple synchronous loop as cloudinary lib is sync (unless managing threads)
        # For bulk, sequential is safer to avoid rate limits or sync issues
        result = await upload_image(file, folder)
        results.append(result)
    return results


async def upload_pdf(file: UploadFile, folder: str = "anvaya/reports") -> Dict[str, str]:
    """
    Upload PDF to Cloudinary.
    """
    await file.seek(0)
    
    result = cloudinary.uploader.upload(file.file, folder=folder, resource_type="auto")
    
    return {
        "url": result.get("secure_url"),
        "public_id": result.get("public_id")
    }


def delete_media(public_id: str, resource_type: str = "image") -> bool:
    """
    Delete media from Cloudinary.
    """
    try:
        cloudinary.uploader.destroy(public_id, resource_type=resource_type)
        return True
    except Exception as e:
        print(f"Error deleting from Cloudinary: {e}")
        return False
