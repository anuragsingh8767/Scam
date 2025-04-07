import crypto from 'crypto';
import Credential from '../models/credSchema.js';

class CredentialService {
    static generateHash(credentialData) {
        // Create a string representation of the credential data
        const dataString = JSON.stringify(credentialData);
        // Generate SHA-256 hash
        return crypto.createHash('sha256').update(dataString).digest('hex');
    }

    static async storeCredentialWithHash(credentialData) {
        try {
            // Generate hash for the credential
            const hash = this.generateHash(credentialData);
            
            // Update or create credential with the hash
            const updatedCredential = await Credential.findByIdAndUpdate(
                credentialData._id,
                {
                    ...credentialData,
                    blockchainHash: hash
                },
                { new: true, upsert: true }
            );

            return {
                success: true,
                credential: updatedCredential,
                hash
            };
        } catch (error) {
            throw new Error(`Error storing credential: ${error.message}`);
        }
    }

    static async retrieveCredentialDetails(credentialId) {
        try {
            const credential = await Credential.findById(credentialId);
            
            if (!credential) {
                throw new Error('Credential not found');
            }
            
            return {
                success: true,
                credential
            };
        } catch (error) {
            throw new Error(`Error retrieving credential: ${error.message}`);
        }
    }
}

export default CredentialService; 