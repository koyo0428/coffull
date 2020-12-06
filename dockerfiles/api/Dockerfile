FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt
RUN bash -c "django-admin startproject coffull_api . "
RUN bash -c "python3 manage.py startapp api"



