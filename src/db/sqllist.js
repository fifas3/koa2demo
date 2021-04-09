export const sqlhome =function(obj){
  console.log(Object.keys(obj).length)
  if(Object.keys(obj).length===0){
    return "SELECT * from newtable " + JSON.stringify(obj)
  }else{
    return "SELECT * from newtable where" + JSON.stringify(obj)
  }
  
}
export const sqladd =function(obj){
  return "insert into newtable(name,sexy) values ('"+obj.name+"','"+obj.sexy+"')"
}
