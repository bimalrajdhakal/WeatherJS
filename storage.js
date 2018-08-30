class Storage{
  constructor(){
    this.city;
    this.state;
    this.defaultCity = 'Bangalore';
    this.defaultState = 'Karnataka';
  }

  getLocationData(){
    if(localStorage.getItem('city') === null){
      this.city = this.defaultCity;
    }else{
      localStorage.getItem('city');
    }

    if(localStorage.getItem('state') === null){
      this.state = this.defaultState;
    }else{
      localStorage.getItem('state');
    }

    return{
      city : this.city,
      state : this.state
    }
  }

  setLocationData(city, state){
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}