export default function WatchVideo() {
  return (
    <video width="1920" height="1080" controls>
      <source
        src={
          "http://127.0.0.1:9000/textify/public/1713834759728-35f651b94fc5f629bab8b0955ad7b7da-Kelly%20Key%20-%20Sou%20a%20Barbie%20Girl%20%5BBarbie%20Girl%5D%20%28Videoclipe%20Oficial%29.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6owKBkhSOkvpXWTksmNQ%2F20240423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240423T011313Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ea72b7edfa6a6bd804f9ceae347abebaf4ade3114d000076c2fb2dc193bda56c"
        }
        type="video/mp4"
      ></source>
    </video>
  );
}
