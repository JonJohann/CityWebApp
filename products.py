from numpy import prod
from functools import reduce

"""Product of the three highest integers in a list"""
def highest_product_vanilla(factor_list):
    product = 1
    highest_numbers = sorted(factor_list)[-3:]  # Gets the three greatest integers of factor_list
    for factors in highest_numbers:
        product *= factors
    return product

"""Highest Product using the reduce method of the functools module"""
def highest_product_reducer(factor_list):
    return reduce((lambda x, y: x * y), sorted(factor_list)[-3:])

"""Highest product using the prod method of the numpy module"""
def highest_product_numpy(factor_list):
    return prod(sorted(factor_list)[-3:])


        
