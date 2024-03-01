function SuperDiamondOS() {
  this.OS = parent;
  this.eval = function(code) {
    if (location.protocol === "https:" || location.protocol === "file:") {
      this.OS.postMessage(code);
    } else {
      var Err = new Error("Super Diamond OS Eval Cannot be Used On This Protocol");
      Err.name = "ProtocolError";
      Err.message = "ProtocolError: Super Diamond OS Eval Cannot be Used On This Protocol";
      throw Err;
    }
  };

  if (this.location.hostname !== "alexidians.github.io") {
    console.warn("There May Be Issues Using Super Diamond OS Window Object Due To The Accessing Domain Not Being alexidians.github.io");
  }
  if (this.location.protocol !== "https:" && this.location.protocol !== "file:") {
    console.warn("Super Diamond OS Eval Will Throw Error due to security reasons when the protocol is not https:// and file://");
  }
}
