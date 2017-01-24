
var contacts = [
  {
    name: 'Eric',
    phone: '407-929-0626',
    address: {street: '13224 Charfield St', city: 'Windermere', state: 'FL'},
    added: new Date(),
    id: Math.random()

  },
  {
    name: 'Rob',
    phone: '(407) 433-9006',
    address: { street: '300 Orlando St', city: 'Orlando', state: 'FL' },
    added: new Date(),
    id: Math.random()
  },
  {
    name: 'Mary',
    phone: '(407) 578-1433',
    address: { street: '200 Main St', city: 'Orlando', state: 'FL'},
    added: new Date(),
    id: Math.random()
  }
]



function Contact (name, phone, address) {
  this.name = name
  this.phoneNum = phone
  this.address = address
}


var eric = new Contact (contacts[0].name, contacts[0].phone, contacts[0].address)
var rob = new Contact (contacts[1].name, contacts[1].phone, contacts[1].address)
var mary = new Contact (contacts[2].name, contacts[2].phone, contacts[2].address)





function ContactList () {
  this.contacts = []
  this.find = function (name) {
    return this.contacts.filter(contact => contact.name === name)
  }

  this.add = function (contact) {
    contact.id = this.contacts.length
    this.contacts.push(contact)
    contact.added = new Date()
    console.log('Contact is:', contact)
  }
  // this.remove =
  this.remove = function (id) {
    this.contacts = this.contacts.filter(contact => contact.id != id)
  }
}


var myContactList = new ContactList
myContactList.add(eric)
myContactList.add(mary)
myContactList.find(rob)

myContactList.add(contacts)
console.log(myContactList);
