import Database from '../db/db';
import query from '../db/queries';

class Parking {
    static async ViewAll() {
        const parkings = await Database.createQuery(query.viewParkings);
        return parkings.rows;
    }
  }
  
export default Parking;