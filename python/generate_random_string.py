def generate_random_string(max_length):
    import string
    import random
    
    length = random.choice(list(range(max_length)))
        
    return "".join(random.choices(string.ascii_letters + string.digits, k=length)