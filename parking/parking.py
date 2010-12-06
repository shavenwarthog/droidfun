import cgi, cgitb, json, logging, os, shelve, sys
cgitb.enable()

logging.basicConfig(level=logging.DEBUG, filename='/tmp/parking.log')

def getdb():
    # X: chmod 666
    return shelve.open('/tmp/parkingdb')

def GET(_):
    try:
        return dict(getdb())
    except ValueError:  
        return {'error':'no database'}

def POST(form):
    db = getdb()
    if form:
        db.update(form)
    return dict(db)

def main():
    try:
        form = cgi.FieldStorage() or None
        # X: un-Unicode keys, for shelve
        if form:
            form = dict( ((str(key),form[key].value) for key in form) )
        logging.info('< %s', form)
        out = json.dumps(globals().get(os.environ.get('REQUEST_METHOD') or 'GET')(form))
        logging.info('> %s', out)
        print 'Content-type: text/plain\n\n',out
    except:
        logging.critical('oops', exc_info=True)
        raise
