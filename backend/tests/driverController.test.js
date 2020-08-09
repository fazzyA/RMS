
const DriverController = require('../controllers/driver')

test("DriverController.getNearByDrivers", ()=>{
    expect(typeof DriverController.getNearByDrivers).toBe('function');
});