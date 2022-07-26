## installation with anaconda

    if the project is new, type:
    ` django-admin startproject pojectname `

    or just clone the project:
    ` git clone repo url `


    next is you go inside the project
    ` cd projectname `

    create virtual invironm,ent for the project
    `
        conda create --name projectname python=3.7
        conda activate projectname
    `

    create requirments.txt if the project is new, then
    install django. Finally freeze the installed
    dependencies to requirements.txt
    `
        touch requirements.txt
        pip install django
        pip freeze > requirements.txt
    `
    
    or if the project is already setup, and already
    have dependencies list on the requirements.txt just:
    ` pip install -r requirements.txt `

    You can now run the project by typing:
    ` python manage.py runserver `


## app creation
    ` python manage.py startapp appName `
