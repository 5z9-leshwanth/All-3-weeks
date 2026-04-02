const express = require('express');
const multer = require('multer');
const router = express.Router();
const File = require('../models/file');

// Multer config
const storage = multer.memoryStorage();

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});

// Upload file
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const file = new File({
            filename: req.file.originalname,
            originalname: req.file.originalname,
            contentType: req.file.mimetype,
            data: req.file.buffer,
            size: req.file.size
        });

        await file.save();

        res.status(201).json({
            message: 'File uploaded successfully',
            fileId: file._id
        });

    } catch (error) {
        res.status(500).json({ message: 'Error uploading file' });
    }
});

// Get all files
router.get('/allfiles', async (req, res) => {
    try {
        const files = await File.find().select('-data');
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching files' });
    }
});

// Get file by ID
router.get('/:id', async (req, res) => {
    try {
        const file = await File.findById(req.params.id);

        res.set('Content-Type', file.contentType);
        res.send(file.data);

    } catch (error) {
        res.status(500).json({ message: 'Error retrieving file' });
    }
});

// Get metadata
router.get('/metadata/:id', async (req, res) => {
    try {
        const file = await File.findById(req.params.id).select('-data');
        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving metadata' });
    }
});

module.exports = router;