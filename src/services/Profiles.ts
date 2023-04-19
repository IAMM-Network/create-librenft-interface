import config from '../config'
import axios from 'axios'
import { utils } from 'ethers/lib'
import { Dispatcher, UserProfileLens } from '../ts/interfaces/tnft'

const { profilesServiceURL } = config;



class ProfileService {

    static async getProfile(account: string) {

        try{

            console.log(profilesServiceURL);
            
            const chkAddress = utils.getAddress(account)
            console.log(chkAddress);
            
            const serviceURL = profilesServiceURL ? `${profilesServiceURL}/api/profiles/${chkAddress}` : `https://services.iamm.network/api/profiles/${chkAddress}`;;
            console.log(serviceURL);
            const result = await axios.get(serviceURL);

            console.log(result);

            return result.data;

        } catch (err) {
            console.error(err)
        }
    }

    static async getSigNonce(account: string) {

        try{

            console.log(profilesServiceURL);
            
            const chkAddress = utils.getAddress(account)
            console.log(chkAddress);
            
            const serviceURL = profilesServiceURL ? `${profilesServiceURL}/api/profiles/signonces/${chkAddress}` : `https://services.iamm.network/api/profiles/signonces/${chkAddress}`;;
            console.log(serviceURL);
            const result = await axios.get(serviceURL);

            console.log(result);

            return result.data;

        } catch (err) {
            console.error(err)
        }
    }


    static async createUserProfile(lensProfile: UserProfileLens) {

        try {

            console.log('--Creating User Profile--')

            let data = JSON.stringify(lensProfile);
            console.log(data);

            const serviceURL = profilesServiceURL ? `${profilesServiceURL}/api/profiles` : `https://services.iamm.network/api/profiles`;
            console.log(serviceURL);

            const result = await axios.post(serviceURL, data, {
                headers: {
                    'Content-Type': 'application/json',
                  }
            });

            console.log(result);

            return result.data;
            
        } catch (error) {
            console.error(error)
        }
    }

    static async setDispatcher(dispatcher: Dispatcher) {

        try {

            console.log('--Setting Dispatcher--')

            let data = JSON.stringify(dispatcher);
            console.log(data);

            const serviceURL = profilesServiceURL ? `${profilesServiceURL}/api/profiles/dispatcher` : `https://services.iamm.network/api/profiles/dispatcher`;
            console.log(serviceURL);

            const result = await axios.post(serviceURL, data, {
                headers: {
                    'Content-Type': 'application/json',
                  }
            });

            console.log(result);

            return result.data;
            
        } catch (error) {
            console.error(error)
        }
    }


}

export default ProfileService;