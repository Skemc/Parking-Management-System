const data = {
  missingSigninField: {
    email: '',
    password: 'myPa55w0rd',
  },
  invalidUser: {
    email: 'emmy@yahoo.fr',
    password: 'emmanuel123',
  },
  validAdmin: {
    email: 'fantasticseven@gmail.com',
    password: 'password',
  },
  validParking: {
    name: 'Makuzaparking',
    location: 'NYARUGENGE',
  },
  invalidParking: {
    name: '',
    location: '',
  },
  validToken: {
    'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvQGdtYWlsLmNvbSIsIm5hbWVzIjoiTWlzdGljbyIsInN0YXR1cyI6ImluYWN0aXZlIiwiaWF0IjoxNTc4OTg2NjkxLCJleHAiOjE1NzkwNzMwOTF9.BC-2Gx6s6rIKPwwXbXyRMAph_LvAiiY3vEnoMdAbQpY'
  },
  invalidToken: {
    'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvQGdtYWlsLmNvbSIsIm5hbWVzIjoiTWlzdGljbyIsInN0YXR1cyI6ImluYWN0aXZlIiwiaWF0IjoxNTc4OTg2NjkxLCJleHAiOjE1NzkwNzMwOTF9.BC-2Gx6s6rIKPwwXbXyRMAph_LvAiiY3vEnoMdAbQpk'
  }
};
export default data;
