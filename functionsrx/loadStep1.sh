echo "Started"

cp /root/assets/step1/*.sh /root/

cat << 'EOF' > /root/step1/multiply.js
function multiply(a, b){
  a * b
}
EOF

cat << 'EOF' > /opt/step1/test.js
var x = multiply(2, 2);
if(x === 4) {
  process.exit(0);
} else {
  console.log("Error", x);
  process.exit(1);
}
EOF
