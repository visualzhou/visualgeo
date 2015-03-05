import ctypes
import sys

class LngLat:
    def __init__(self, lng, lat):
        self.lng = lng
        self.lat = lat

    def __str__(self):
        return "(%s, %s)" % (self.lng, self.lat)

class S2Parser:
    def __init__(self, lib_path):
        self.lib = ctypes.cdll.LoadLibrary(lib_path)

    def parse(self, geo_hash):
        d = (ctypes.c_double * 8)()
        self.lib.convert_hash(geo_hash, ctypes.byref(d))
        points = []
        for i in xrange(4):
            points.append(LngLat(d[i * 2], d[i * 2 + 1]))
        return points

    def parse_to_json(self, geohash):
        geohash = geohash.encode('ascii','ignore')
        coords = []
        try:
            # Parse S2 Geo hash
            points = self.parse(geohash);
            if len(points) == 0:
                print "points is empty when parsing", geohash
                return None

            for ll in points:
                coords.append([ll.lng, ll.lat])

            coords.append([points[0].lng, points[0].lat])

        except:
            print "Unexpected error:", sys.exc_info()[0]

        if len(coords) == 0:
            print "coords is empty when parsing", geohash
            return None

        # Construct GeoJSON
        return { "type": "Polygon", "coordinates": [ coords ]}

if __name__ == "__main__":
    parser = S2Parser("build/libs2parser.dylib")
    for ll in parser.parse("0f022022"):
        print ll
