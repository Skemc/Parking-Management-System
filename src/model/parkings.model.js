import Database from '../db/db';
import query from '../db/queries';

class Parking {
    static async create({
        name, location
    }) {
        const createdParking = await Database.createQuery(query.createParking,
          [name, location, 'available']);
        return createdParking.rows[0];
    }

    static async ViewAll() {
        const parkings = await Database.createQuery(query.viewParkings);
        return parkings.rows;
    }
}
  
export default Parking;