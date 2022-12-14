import config from '../config'
import pinataSDK from '@pinata/sdk'
import { PinataPinOptions } from '@pinata/sdk/types/commands/pinning/pinFileToIPFS'
import axios from 'axios'

const { pinataApiKey, pinataApiSecret } = config

const JWT = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhMjZkODdmZC1jZDFmLTRkZWUtODAxZC05MmU1NzhiN2VjNzUiLCJlbWFpbCI6InRyaWN1YmVhcnRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6Ijk3NWZhN2VmMmJhMzg2ZjhmMjlhIiwic2NvcGVkS2V5U2VjcmV0IjoiOTg1YzI3ZGY4MDhiYjM2NzE4NWMzZjA3MGJmMWI0NmE4ZGRlNmI4NWJmODBlOTI3YmM1NjMyMTI1Nzk3NjIzZiIsImlhdCI6MTY2OTczODk1MX0.T97R0igNr1aka4mb5Z0S5Uaj6q--EnkLD6HPhmSgbk0"

class PinataService {
  static async PinImageToIPFS(selectedFile: any) {
    try {
      const formData:any = new FormData();
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
