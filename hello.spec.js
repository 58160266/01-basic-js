const hello = require('./hello') //เหมือน import  ... = .... (ชื่อ file java scripts)

test('hello',() => {
  //Arrange
  let name = 'Yo'

  //Act
  let result = hello(name)

  //Assert
  expect(result).toBe('Hello Yo')
})
