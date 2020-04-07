const logDriverNames = (drivers) => {
    drivers.forEach(driver => console.log(driver.name))
};

const logDriversByHometown = (drivers, hometown) => {
    drivers.forEach(function (driver){
        if (driver.hometown === hometown){
            console.log(driver.name)
        }
    })
};
//why do I have to use .slice()
const driversByRevenue = (drivers) => {
    return drivers.slice().sort(function(driver1, driver2){
     return driver1.revenue - driver2.revenue
   })
 };

 const driversByName = (drivers) => {
    return drivers.slice().sort(function(driver1, driver2) {
      return driver1.name.localeCompare(driver2.name);
    });
  };

  const totalRevenue = (drivers) => {
    return drivers.reduce(function(accumulator, driver){
        return driver.revenue + accumulator 
    }, 0)
  };

  const averageRevenue = (drivers) => {
      return totalRevenue(drivers) / drivers.length
  }

