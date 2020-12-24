const RESTRICTED_FILES = [
  'node_modules',
  '.npmrc',
  '.gitignore',
  'package.json',
  'yarn.lock',
  '.eslintrc.js',
  'babel.config.js',
  'headerScript.js',
  'submit.js',
  ''
];
const SOLUTION_IDS = [
  'ef1cd5f068a04977adb09012e1dea564',
  '651935003b404e7e8b8ac71ed5b5f049',
  '9bc3e2c0dc8b49ee918a89076e51b50d',
  'bd7914ae578e401bb5e504c2c5398718',
  'e9daa795c5184f48bc443b00254650fa',
  '7934c85409e84572986510a753ab6d49',
  '44b2a8398ee9416895c0d57b3331d4ab',
  'e34788cd9eea473eb863522316b3b162',
  '3fd6f771afc94265b71fb46ac1c98d8f',
  '13ba28b55ad148f18f896824ba35b79e',
  '0cb3f50549ba4b7ea7a0dbd6f19590af',
  '231f049d06ca4e9fa90ccfa2e0b28acd',
  'b738f76367ef4bbd97e96b4bb6629ed0',
  'aea106cc963c4ee59a7358a57f9ac55d',
  '261f5bfd1ee340e0915f3a8a784030fd',
  'c16202c98b4e4e1cad9502d24ab84444',
  '11ec2e0e8b084bbdbe29570fd317c591',
  'da937ac1b6394727b71a0ae8bf6e63a8',
  'c890a88e7f814686af77c7ab8abb8c7f',
  'fe94f7d9828841069c1c1590a04e1c0b',
  '671dcf8a73ee46dbba7929ce3be7fe9f',
  '4ea07519d76d464b8708df84fbcbd8f5',
  '8c2dd1c66d51408b9da17b587da153f4',
  '46837b4cdb254ef3b6a2d39938c81bac',
  '41bc49aea6a243868a06890c014a0a6c',
  '2a0f5a96d1ec477d98518e47b7b9c52c',
  '9969727decf842bb8d9982d4ac0dbc05',
  'e1c84d96a8d34e50bcacb8b41034b2ea',
  'd39caa9c02594fb4906e7a3801a239b9',
  '17dd8245433d4d7eb8777829d92304cc',
  '42ab9f72fc2d4bc1a7c16dca9bc088fa',
  'ef4cb2f406354eb3817e57405201e8e0',
  'c794547f6c6642dab888882f01eec291',
  'acbd2c7b750a4e2e9099ceea989b97aa',
  '7f25fd9eee3b482483ebc3d125d1f6f1',
  'e7133343fc104d84a810c1143f7191cc',
  '07a22dfd7f694ca7bc4a24b63ea1efad',
  'a0ec63e5c79240558208c4a368b9ce3a',
  '9a53e13985b14f21900dc40e87efc149',
  'aa4eb768acc9456683ad5feb2a6f4c46',
  '47556f79403c46ef90b4c0c1c7ce8af1',
  'a2c2e83f09ad4fc3a99bad82f632cd23',
  'f08b295993bc49bbb69aaa7d989791f3',
  '3fd92f638af3474cb85d4e1e658f0d07',
  'ee0bc903fc5c4068b55ef5274af2079e',
  'a6358204ff9846f5a5516dcc6e2742d3',
  '9e0220db4ec0480e867b94ef887db990',
  'b6be735bf00b4a2aa23785632b776ed8',
  '6e5af26194054411935487692732bc46',
  'e0bb45c64b9a434da5d2cab2b85a2def',
  '40ab3d8550d345b580e1aa67a1fd08bf',
  'f06c1b0a4ece41d6a6078dac969a1ba2',
  'bd7e33b1c516467aaf16b13ec128a421',
  'bf2e44cb45194c7fb50ae1d5305aea98',
  '7dd8eeedc9fc41a0841d090afa101317',
  'f5e4e968296e40689b773b8c2ff8e8ba',
  'fd3d2fcc91544ff9b048840cd3258c00',
  '48d6e7925fc844c6a10ce4783472f45d',
  '36d6ffa593c04ce680396425d6fa6416',
  'f1bbcac1e4ac4774b2cb7381ac9ab5e4',
  '07adb522f3844933b6c2a004791c6b90',
  '36c34fae34474918998eb3976d56ab04',
  '06cafe731e204a178faa8516e9aa3d90',
  '98b90a7837254ed8973249cdb5a6ee28',
  'f7f3db02324d48f9a1a9fbf48908a33a',
  '9e702dcb020f452aa1b65de1c242f9b5',
  '13549c16f27146eba93eeca75d7534a4',
  'fff8e4c0cce641f391cfb9235a6ddab8',
  '25e574a349494a0f8357816d2ac6a6f2',
  'd4149a6e5a4143978a6d6cd61156a96d',
  '440e7944acaa43c5845788b4b5109d92',
  '22ebda9706eb4ac59ce30d9259f54693',
  '8cc9a0dd4a974a7e8d0a967ae2572705',
  '2ddf4b5cf2e942b5bef05b0510f3654f',
  'bc7cd951779c4403bac0e4ab05b77859',
  '5c052f78910e41abade158beab0b977b',
  'a089c22cd59e4ffeaf56eb979f0ae24c',
  '25f50e865578423db1f16e772fbb368b',
  '78850a1f79974584a884d35c6b6a9e49',
  'ecc581b0a52b405c89304a7062e4092b',
  'd49caa687d6b4cf1a7bb2cdf26aeb4e6',
  '1065ca7016f54eb08e3e6f8563b39ab2',
  'e6d24db6ad2844899083edf173bbc550',
  '7364a3e5f71546cc82e589d6e1be129e',
  '4202d21cb7f5415596527b399c64d331',
  '09f6d0a5d9914fd38adebbb38ba03ec1',
  'f8812ec8f97e402f99c65646b5af0cd3',
  'fd8b6141dde84fff9d459b667952d6a5',
  '19d674efd7bd4e5caea8aadd2c405fad',
  '88d48a27df7b493d8acff86d2d6c96fd',
  '5884cc3b0ebe424485bba49fb7ad2d9b',
  '91eab16e11554559ae0c26903d46920f',
  'bd4395901b9143cbba760cfcd0aa8e3b',
  '1a8ded7d276e45a787332aa8da65e7eb',
  'cd51645e819c495382dcc3d807635169',
  '15c30fca13cb46b6bf29a6571c505807',
  '5e7154619df044f1a67071f977a7ad89',
  '4a0107470034417ebedf7df7520429db',
  '07f5655ec15247a4ba14954e142ee145',
  '47ad292be27c4f5a8ef4c4b1b138bbd6',
  '70bffc1cec7243cabd83f31b0dd86c77',
  'bff32691dce0494c8c89f4b4aba8f3d1',
  '18fed7af29674e8bbb684a3f94630c5e',
  '970fe08f73e9404dbaf10036821a9069',
  'fe3daae51e4145c883774cfabfabfdb6',
  '7ebbaf08267c4dac8503ed9e9a55a86a'
];

module.exports = {
  RESTRICTED_FILES,
  SOLUTION_IDS
};