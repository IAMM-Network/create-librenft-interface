import config from '../config'
import axios from 'axios'
import {utils} from 'ethers/lib';

const { profilesServiceURL } = config

class ProfileService {

    static async getProfile(account: string) {

        try{

            console.log(profilesServiceURL);
            
            const chkAddress = utils.getAddress(account)
            console.log(chkAddress);
            
            const serviceURL = profilesServiceURL ? `${profilesServiceURL}/api/profiles/${chkAddress}` : `http://18.116.40.118:1337/api/profiles/${chkAddress}`;;
            console.log(serviceURL);
            const result = await axios.get(serviceURL);

            console.log(result);

            return result.data;

        } catch (err) {
            console.error(err)
        }
    }
}

export default ProfileService;