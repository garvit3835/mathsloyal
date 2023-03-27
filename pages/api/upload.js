import fs from 'fs';
import AWS from 'aws-sdk';
import formidable from 'formidable'
import { v4 as uuidv4 } from 'uuid';


const s3Client = new AWS.S3({
    endpoint: process.env.DO_ENDPOINT,
    credentials: {
        accessKeyId: process.env.DO_KEY,
        secretAccessKey: process.env.DO_SECRECT_KEY
    }
});

export const config = {
    api: {
        bodyParser: false
    }
}

export default async function handler(req, res) {
    const form = formidable();

    return form.parse(req, async (err, fields, files) => {
        if (!files.filer) {
            res.status(400).json({ error: "No file uploaded", fields, files });
            return;
        }
        try {
            let name = uuidv4() + "_" + files.filer.originalFilename

            const data = await s3Client.putObject({
                Bucket: "wrap",
                Key: name,
                ContentType: files.filer.mimetype,
                Body: fs.createReadStream(files.filer.filepath),
                ACL: 'public-read'
            })
                .promise();
            res.status(200).json({
                "message": "File uploaded successfully",
                "data": data,
                "url": `https://wrap.sgp1.digitaloceanspaces.com/${name}`,
                "fields": fields,
            });

        } catch (error) {
            res.status(400).json({ "error": error.message });
        }
    });
}
