export const sqlhome =function(obj){
  console.log(JSON.stringify(obj))
 
  if(obj.hasOwnProperty('vtable')){
    if(Object.keys(obj).length===0){
      throw error
    }else{
      return `SELECT * from ${obj['vtable']} where ${obj['setsql']}`
    }
  }
}


export const sqladd =function(obj){
  return `insert into ${obj['vtable']}(${obj.vcolumn}) values ('"+obj.name+"','"+obj.sexy+"')`
}
