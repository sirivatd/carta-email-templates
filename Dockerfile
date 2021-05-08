FROM python:3.8-slim as production

COPY requirements.txt requirements.txt
COPY email_templating_backend email_templating_backend
WORKDIR /

RUN pip install -r requirements.txt

CMD python -m email_templating_backend.app
