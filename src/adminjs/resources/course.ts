import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";
import UploadProvider from "../../uploadProvider";

export const courseResourceOptions: ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'synopsis', 'uploadThumbnail', 'featured', 'categoryId'],
    filterProperties: ['name', 'synopsis', 'featured', 'categoryId', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name', 'featured', 'categoryId'],
    showProperties: ['id', 'name', 'synopsis', 'featured', 'thumbnailUrl', 'categoryId', 'createdAt', 'updatedAt']
}

export const courseResourceFeatures: FeatureType[] = [
    uploadFileFeature({
       
            provider: new UploadProvider(),
       
        properties: {
            key: 'thumbnailUrl',
            file: 'uploadThumbnail'
        },
        uploadPath: (record, filename) => `thumbnails/course-${record.get('id')}/${filename}`
    })
]