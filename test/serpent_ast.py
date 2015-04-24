#!/usr/bin/env python
# -*- coding: utf-8 -*-

from ast import *
from pyethereum import utils
import argparse
from argparse import RawTextHelpFormatter
import mmap

# Empty
# (return 0 (lll (seq) 0))

'''
return(2)


(return 0
  (lll
    (seq
      (set '_temp_121 2)
      (return (ref '_temp_121) 32)
    )
    0
  )
)
'''

'''
def double(x):
    return(x * 2)


(return 0
  (lll
    (with '__funid
      (div (calldataload 0)
        26959946667150639794667015087019630673637144422540572481103610249216
      )
      (unless (iszero (eq (get '__funid) 1878662314))
        (seq
          (set 'x (calldataload 4))
          (seq
            (set '_temp_521 (mul (get 'x) 2))
            (return (ref '_temp_521) 32)
          )
        )
      )
    )
    0
  )
)
'''

'''
def double(x, y):
    return(x * 2)


(return 0
  (lll
    (with '__funid
      (div (calldataload 0)
        26959946667150639794667015087019630673637144422540572481103610249216
      )
      (unless (iszero (eq (get '__funid) 64788596))
        (seq
          (seq
            (set 'x (calldataload 4))
            (set 'y (calldataload 36))
          )
          (seq
            (set '_temp_591 (mul (get 'x) 2))
            (return (ref '_temp_591) 32)
          )
        )
      )
    )
    0
  )
)
'''

'''
def double(x):
    return(x * 2)

def div(x):
    return(x / 2)


(return 0
  (lll
    (with '__funid
      (div (calldataload 0)
        26959946667150639794667015087019630673637144422540572481103610249216
      )
      (seq
        (unless (iszero (eq (get '__funid) 1878662314))
          (seq
            (set 'x (calldataload 4))
            (seq
              (set '_temp_681 (mul (get 'x) 2))
              (return (ref '_temp_681) 32)
            )
          )
        )
        (unless (iszero (eq (get '__funid) 434417597))
          (seq
            (set 'x (calldataload 4))
            (seq
              (set '_temp_881 (sdiv (get 'x) 2))
              (return (ref '_temp_881) 32)
            )
          )
        )
      )
    )
    0
  )
)
'''

# Constants                 #################################

L = '('
R = ')'

TYPE_MAP = {
    'i': 'int256',
    's': 'string',
    'a': 'int256[]'
}

print str(2**224)

BINOP_SYMBOLS = {}
BINOP_SYMBOLS[Add] = 'add'
BINOP_SYMBOLS[Sub] = 'sub'
BINOP_SYMBOLS[Mult] = 'mul'
BINOP_SYMBOLS[Div] = 'div'
BINOP_SYMBOLS[Mod] = 'mod'


class SerpentTransformer(NodeVisitor):
    '''
    Walks a Python AST Tree and generates Ethereum-compatible LLL Code
    Reference: https://github.com/andreif/codegen/blob/master/codegen.py
    '''

    result_lll = ''
    unique_var_counter = 0

    # Helper Functions      #################################

    def get_function_id(self, func, args=[]):
        ''' Uses TYPE_MAP to generate Function ID '''

        label = func + L
        label += ','.join([TYPE_MAP.get(x, 'weird') for x in args])
        label += R
        return utils.decode_int(utils.sha3(label)[:4])

    def get_var_id(self):
        ''' Returns a unique id for  '''

        self.unique_var_counter += 1
        return 'var_' + str(self.unique_var_counter)

    def write(self, x):
        ''' Writes to final output LLL string '''

        self.result_lll += x

    # AST Walking Functions #################################

    def visit_Module(self, node):
        self.write(L + 'return 0 (lll (seq ')
        for item in node.body:
            self.visit(item)
        self.write(') 0))')

    def visit_Return(self, node):
        self.write(L + 'return ')
        self.visit(node.value)
        self.write(R)

    def visit_Name(self, node):
        self.write(node.id + ' ')

    def visit_Call(self, node):
        for arg in node.args[::-1]:
            self.visit(arg)

        self.visit(node.func)

    def visit_Expr(self, node):
        self.generic_visit(node)

    def visit_BinOp(self, node):
        self.visit(node.right)
        self.visit(node.left)
        self.write('%s ' % BINOP_SYMBOLS[type(node.op)])


def compile(f, method='evm'):
    code = ''
    # try:
    with open(f, 'r+b') as f:
        # Read with mmap incase .se file get ridiculously huge, probs not necessary
        map = mmap.mmap(f.fileno(), 0, prot=mmap.PROT_READ)
        for line in iter(map.readline, ''):
            code += line
    # except:
    #     # Assume f is code string and not file ?
    #     code = f

    serpent_parser = SerpentTransformer()
    ast_se = parse(code)
    print dump(ast_se)
    serpent_parser.visit(ast_se)

    if method == 'lll':
        return serpent_parser.result_lll
    elif method == 'evm':
        return 'Not Implemented'


if __name__ == '__main__':

    argparser = argparse.ArgumentParser(formatter_class=RawTextHelpFormatter, description=u'''[0;40;30m[9C[1;32m   [30m  [31m┌──[30m─[0;31m┐   [1;30m[30C┌─┐
[9C[0m   [1;30m┌─[31m┤ ░[0;31m ├ ! [1;30m [37mpyserpent v0.1 [30m[14C└─┘.se
[6C[0;32m┌──[37m─[32m┐ │[1;30m [31m└──[0m─[31m┘   [1;30m   [0m┌─┐[1;30m.[37mse  [0m ┌[32m───┐ ┌───[1;30m┐[0;32m ┌──[1;30m─[0;32m┐
[1;30m[6C[0;32m│ ░[37m [32m├─┤[1;30m    [0m   [1;30m[5C[0m└─┘[1;30m [37m   ┌[0;32m─[37m┤[32m ░ ├─┤ ░ [1;30m├[0;32m─┤ ░[1m [0;32m├─ [1;37m36f[0mfa1c[1;30maa ?
 ┌[37m─┐  └─[0;32m─[1;30m─[0;32m┘ │ ┌───┐ ┌───┐ ┌[37m─[32m──[1;37m┐ │[0;32m [37m└[32m───┘ └───[1;30m┘[0;32m └──[1;30m─[0;32m┘
[1;30m └[37m─┘.se [30m    └[0;32m─┤ ░ ├─┤ ░ ├─┤[1;30m [0;32m░ ├─┤
[1;30m  [37m[6C[30m   [0m  [32m └───┘ └[1;31m─┬─[0;32m┘ └[1;30m─[0;32m──┘ [1;30m│[31m ┌──[30m─[0;31m┐
[1;30m[11C[0m[5C[1;30m    ┌[31m─┴─┐┌─[30m──[0;31m┐  └[1m─┤ ░[0;31m ├─ ! [1;30m[11C┌[37m─┐.se
[30m[11C[0m[5C[1;30m    │[31m ░ ├┤ [0;31m░ ├ ! [1m └──[30m─[0;31m┘    [1;30m    ┌─┐    └[37m─┘
[30m[10C┌─┐.se    └──[0m─[1;31m┘└─[30m──[0;31m┘   [1;30m[14C└─┘.se
[37m [30m[9C└─[37m┘[00m
    ''')

    subparsers = argparser.add_subparsers(dest='command')

    # Compile Command       #################################

    p_compile = subparsers.add_parser('compile',
                                      help='Compile Serpent to EVM Bytecode')
    p_compile.add_argument('file',
                           help='*.se input file',
                           type=str)

    # Compile to LLL Command ################################

    p_compile_to_lll = subparsers.add_parser('compile_to_lll',
                                             help='Compile Serpent to LLL')
    p_compile_to_lll.add_argument('file',
                                  help='*.se input file',
                                  type=str)

    args = argparser.parse_args()

    # Probably abit over-engineered
    result = {
      'compile': lambda a: compile(a.file),
      'compile_to_lll': lambda a: compile(a.file, 'lll')
    }[args.command](args)
    print result
