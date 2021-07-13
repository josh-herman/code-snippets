def randomDate(start, end):
    import random
    import time
    from datetime import datetime
    frmt = '%d-%m-%Y %H:%M'

    stime = time.mktime(time.strptime(start, frmt))
    etime = time.mktime(time.strptime(end, frmt))

    ptime = stime + random.random() * (etime - stime)
    dt = datetime.fromtimestamp(time.mktime(time.localtime(ptime)))
    return dt‍‍‍‍‍‍‍‍‍‍‍‍

randomDate("20-01-2018 13:30", "23-01-2018 04:50")

# https://community.esri.com/t5/arcgis-pro-questions/how-to-field-calculate-random-dates-for-a-specific-time-period/m-p/341049