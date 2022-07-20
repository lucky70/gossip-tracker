const Home = () => {

    const share = () => {
        let message = ' some message https://stackoverflow.com/questions/21935149/sharing-link-on-whatsapp-from-mobile-website-not-application-for-android'
  
            window.open(
                "whatsapp://send?text=" + message,
                '_blank' 
            );
    } 

    const shareTwitter = () => {
        let message = ' some message https://stackoverflow.com/questions/21935149/sharing-link-on-whatsapp-from-mobile-website-not-application-for-android'
  
            window.open(
                "messenger://send?text=" + message,
                '_blank' 
            );
    } 
    return (
    <div>
        <button onClick={share}>share in whatsapp</button>
        <button onClick={shareTwitter}>share in twitter</button>
     </div>
        );
}

export default Home