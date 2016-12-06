
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



function Contact (name, phone, address, added, id ) {
  this.name = name
  this.phoneNum = phone
  this.address = address
  this.added = new Date()
  this.id = Math.random()
}


var eric = new Contact (contacts[0].name, contacts[0].phone, contacts[0].address, contacts[0].added)
var rob = new Contact (contacts[1].name, contacts[1].phone, contacts[1].address, contacts[1].added)
var mary = new Contact (contacts[2].name, contacts[2].phone, contacts[2].address, contacts[2].added)



function ContactList () {
  this.contacts = []
  this.find = 
  // this.get =
  this.add = function (contact) {
    this.contacts.push(contact)
    // this.id = Math.random()
  }
  // this.remove =
}

var myContactList = new ContactList

myContactList.add(contacts)
console.log(myContactList);
