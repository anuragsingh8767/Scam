import CredentialService from '../services/credentialService.js';

class CredentialController {
    static async processCredential(req, res) {
        try {
            const { schema } = req.body;

            if (!schema) {
                return res.status(400).json({
                    success: false,
                    message: 'Schema data is required'
                });
            }

            const result = await CredentialService.storeCredentialWithHash(schema);

            return res.status(200).json({
                success: true,
                message: 'Credential processed successfully',
                data: result
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error processing credential',
                error: error.message
            });
        }
    }

    static async getCredentialDetails(req, res) {
        try {
            const { credentialId } = req.params;

            if (!credentialId) {
                return res.status(400).json({
                    success: false,
                    message: 'Credential ID is required'
                });
            }

            const result = await CredentialService.retrieveCredentialDetails(credentialId);

            return res.status(200).json({
                success: true,
                message: 'Credential details retrieved successfully',
                data: result
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error retrieving credential details',
                error: error.message
            });
        }
    }
}

export default CredentialController; 