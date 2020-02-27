with import <nixpkgs> {};

with pkgs;
stdenv.mkDerivation {
    name = "michaels-cv";
    buildInputs = [
          nodejs-12_x python3
      ];
}
