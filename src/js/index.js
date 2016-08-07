
async function Test(){
    let resp = await fetch('http://hey-riddleoo.site')
    let text = await resp.text()
    console.log(text)
}
Test()

