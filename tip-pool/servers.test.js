describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server if the server name is empty on submitServerInfo()', () => {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
    expect(serverId).toEqual(0);
  })

  it('should add a server table row on updateServerTable()', () => {
    submitServerInfo();

    const serverList = serverTbody.children;

    expect(serverList.length).toEqual(1);
    expect(serverList[0].children[0].innerText).toEqual('Alice');
    expect(serverList[0].children[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
