const people = [ 
    { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
  { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } }
  ]
  
  result=[]
  for(i=0 ; i<people.length ; i++){
    result.push(`${people[i].name} lives in ${people[i].address.city} on ${people[i].address.street.name }`)
  }
  
  console.log(result)
  
  
  
  
  
  