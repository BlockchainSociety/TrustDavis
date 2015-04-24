from pyethereum import tester
from pyethereum import utils

CONTRACT = """
data test[][][]

data graph[](in[], out[], data[])

def find_storage():

    liability = 50
    self.graph["v1"].in["v2"] = liability
    self.graph["v2"].out["v1"] = liability
    for i in self.graph["v1"].in:
        log(i)


    self.test["v1"]["v2"]["test"] = 50
    if self.storage[sha3([0, "v1", "v2", "test"])] == 50:
        log("yay")

    if self.storage[sha3([0, "v1", "v2", "test"]:arr)] == 50:
        log("yay:arr")

    return 0


"""
s = tester.state()
# c = s.abi_contract("../contracts/test_graph.se")
c = s.abi_contract(CONTRACT)
print c.find_storage()
print 

# items = s.block.get_storage(c.address).to_dict().items()
# for k in items:
#     key, val = k
#     print utils.decode_int(key)

# blah = utils.sha3("test")
# print  utils.decode_int(utils.sha3("v1"))

# class TestGraph(object):

#     CONTRACT = ''
#     CONTRACT_GAS = 0

#     def setup_class(cls):
#         cls.s = tester.state()
#         cls.c = cls.s.abi_contract(cls.CONTRACT)
#         cls.snapshot = cls.s.snapshot()

#     def setup_method(self, method):
#         self.s.revert(self.snapshot)

#     def test_create_gas_used(self):
#         print "create gas used:", self.s.block.gas_used
#         assert self.s.block.gas_used <= self.CONTRACT_GAS

#     def test_init(self):
#         assert self.s.block.get_code(self.c.address) != ''