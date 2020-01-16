import Database from '../db/db';
import query from '../db/queries';

class Parking {
    static async create({
        name, location
    }) {
        const createdParking = await Database.createQuery(query.createParking,
          [name, location, 'available']);
        return createdParking.rows;
    }

    static async ViewAll() {
        const parkings = await Database.createQuery(query.viewParkings);
        return parkings.rows;
    }

    static async viewSpecific(id) {
        const parking = await Database.createQuery(query.viewParking, [id]);
        return parking.rows[0];
    }
    static async searchParking(search) {
        const { rows } = await Database.createQuery(query.searchParking, [search]);
        return rows;
    }
}
  
export default Parking;