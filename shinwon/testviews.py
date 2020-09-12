from django.shortcuts import render

def main(request):
    return render(request, 'main/main.html')

def center(request):
    return render(request, 'test_center/test_center.html')