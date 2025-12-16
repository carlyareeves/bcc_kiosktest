import video from "/ed-tattoo.mp4";

function EventPromo() {
  return (
    <video autoPlay muted loop id="heroVid">
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default EventPromo;
