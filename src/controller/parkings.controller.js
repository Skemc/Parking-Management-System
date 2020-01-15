import Parking from '../model/parkings.model'

class ParkingController {
    static async viewAllParkings(req, res) {
      try {
        const Parkings = await Parking.ViewAll(req.userData);
        if (Parkings.length == 0) {
          return res.status(404).json({
            status: 404,
            error: 'No data available',
          });
        }
        return res.status(200).json({
          status: 200,
          data: Parkings,
        });
      } catch (error) {
          console.log(error);
          res.status(500).json({
            status: 500,
            error: 'Internal Server Error!',
          });
      }
    }
  }
  
  export default ParkingController;