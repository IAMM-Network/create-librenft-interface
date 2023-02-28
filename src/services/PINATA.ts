import config from '../config'
import pinataSDK from '@pinata/sdk'
import { PinataPinOptions } from '@pinata/sdk/types/commands/pinning/pinFileToIPFS'
import axios from 'axios'

const { pinataApiKey, pinataApiSecret } = config

const JWT = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlODkyZDI0ZC0xODljLTRjZWItOWZhNy1kYmEzZjNiNGYzODciLCJlbWFpbCI6InBhYmxpdG9sYWJhcnRhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJkNDgzMDUyNWMzYmNjNGMyMzFlMSIsInNjb3BlZEtleVNlY3JldCI6IjVjY2NmYTJlYWJiYzlmNmRiZWMzY2E0N2U2MmMzY2I2M2M3Y2M4NGYxNTg4ZWU4MjM3MmU5YTcxYWJkZGUyMDkiLCJpYXQiOjE2Nzc1ODc2MDV9.JvAnw9x9GMTM6Ar-Un0O76Klxcyn9jJ0TeKxxuQWWKA"

class PinataService {
  static async PinImageToIPFS(selectedFile: any) {
    try {
      const formData: any = new FormData();
      formData.append('file', selectedFile)

      const metadata = JSON.stringify({
        name: 'IAMM_IMAGE',
      });
      formData.append('pinataMetadata', metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      })
      formData.append('pinataOptions', options);

      const result = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: 10000000,
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });

      return result.data.IpfsHash
    } catch (err) {
      console.error(err)
    }
  }

  static async PinJSONToIPFS(json: any) {
    const pinata = new pinataSDK({ pinataApiKey, pinataSecretApiKey: pinataApiSecret })
    try {
      const { authenticated } = await pinata.testAuthentication()
      if (!authenticated) throw Error('Pinata authentication failed')

      const options: PinataPinOptions = {
        pinataMetadata: {
          name: 'IAMM_JSON',
        },
        pinataOptions: {
          cidVersion: 0,
        }
      }

      const result = await pinata.pinJSONToIPFS(json, options)
      return result.IpfsHash
    } catch (err) {
      console.error(err)
    }
  }
}

export default PinataService
