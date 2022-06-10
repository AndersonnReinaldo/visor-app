import Ping from 'react-native-ping'

interface IProps {
  ipAddress: string
}

const ping = async({ipAddress}:IProps): Promise<any> => {
    try {
        const ms = await Ping.start(ipAddress,{ timeout: 1000 });

        return{
          status:true,
          ms
        }
      
      } catch (error) {
        return{
          status:false,
          ms: 0
        }
      }

}

export default ping