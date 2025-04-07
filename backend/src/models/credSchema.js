import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    grade: { type: String, required: true },
    credits: { type: Number, required: true }
}, { _id: false });

const studentCredentialSchema = new mongoose.Schema({
    username: { type: String, required: true },
    label: { type: String, required: true },
    studentName: { type: String, default: null },
    studentId: { type: String, default: null, unique: false },
    degree: { type: String, default: null },
    graduationDate: { type: Date, default: null },
    institution: { type: String, default: null },
    courses: { type: [courseSchema], default: [] },
    gpa: { type: Number, default: null },
    credentialId: { type: String, default: null },
    blockchainHash: { type: String, default: null },
    issuedAt: { type: Date, default: Date.now },
    additionalAttributes: { type: mongoose.Schema.Types.Mixed, default: {} }, // Accept plain objects
});

const StudentCredential = mongoose.model('StudentCredential', studentCredentialSchema);

export default StudentCredential;