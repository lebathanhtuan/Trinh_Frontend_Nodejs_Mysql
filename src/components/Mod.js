import "../style/mod.scss";

function Mod() {
  return (
    <div className="mod-container">
      <div className="title">MOD NRO</div>
      <div className="version-mod">
        <div className="child-mod ">
          <div className="font-l">PC</div>
          <i class="fa-solid fa-laptop-code font-l"></i>
          <div className="description">Version mới nhất 2.3.0</div>
          <a
            href="https://drive.google.com/uc?id=158OdPAW73J1CMk0BmWl4En318sUqmYOP&export=download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Dowload</span>
          </a>
        </div>
        <div className="child-mod android">
          <div className="font-l">ANDROID</div>
          <i class="fa-brands fa-android font-l"></i>
          <div className="description">Version mới nhất 2.3.0</div>
          <a
            href="https://www.mediafire.com/file/3onxxx2akmxfg1f/ModKoi230.apk/file"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Dowload</span>
          </a>
        </div>
        <div className="child-mod">
          <div className="font-l">IPHONE</div>
          <i class="fa-brands fa-apple font-l"></i>
          <div className="description">Version mới nhất 2.3.0</div>
          <a
            href="https://www.mediafire.com/file/5vacxmswfyyteet/ModKoi230.ipa/file"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Dowload</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mod;
