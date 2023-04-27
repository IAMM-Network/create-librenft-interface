import config from '../config'
import axios from 'axios'
import { utils } from 'ethers/lib'
import { Dispatcher, UserProfileLens } from '../ts/interfaces/tnft'

const { profilesServiceURL } = config;



class ContractService {

    static async geOwnerContracts(account: string) {

        try{

            console.log(profilesServiceURL);
            
            const chkAddress = utils.getAddress(account)
            console.log(chkAddress);
            
            const serviceURL = profilesServiceURL ? `${profilesServiceURL}/api/contracts/owner/${chkAddress}` : `https://services.iamm.network/api/contracts/owner/${chkAddress}`;;
            console.log(serviceURL);
            const result = await axios.get(serviceURL);

            console.log(result);

            return result.data;

        } catch (err) {
            console.error(err)
        }
    }

}

export default ContractService;