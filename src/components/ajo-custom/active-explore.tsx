export default function ActiveExplore() {
  return (
    <a href="">
      <div className="py-2.5 bg-pink-700 bg-opacity-10 rounded-lg justify-center items-center gap-2.5 inline-flex">
        <div className="w-6 h-6 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2.00171C11.8011 2.00171 11.6103 2.08073 11.4697 2.22138C11.329 2.36203 11.25 2.5528 11.25 2.75171C11.25 2.95062 11.329 3.14139 11.4697 3.28204C11.6103 3.42269 11.8011 3.50171 12 3.50171C12.1989 3.50171 12.3897 3.42269 12.5303 3.28204C12.671 3.14139 12.75 2.95062 12.75 2.75171C12.75 2.5528 12.671 2.36203 12.5303 2.22138C12.3897 2.08073 12.1989 2.00171 12 2.00171ZM14.752 2.41382C14.5704 2.41053 14.3937 2.47325 14.2549 2.59034C14.116 2.70742 14.0244 2.87091 13.9969 3.05046C13.9695 3.23 14.0081 3.41341 14.1057 3.56662C14.2032 3.71983 14.3531 3.83244 14.5273 3.88354C17.1876 4.71092 19.2908 6.8141 20.1182 9.47437C20.1474 9.56844 20.1949 9.65583 20.2579 9.73155C20.3209 9.80727 20.3982 9.86984 20.4854 9.91569C20.5726 9.96153 20.668 9.98975 20.7661 9.99874C20.8642 10.0077 20.9631 9.9973 21.0571 9.96806C21.1512 9.93882 21.2386 9.89133 21.3143 9.82832C21.39 9.7653 21.4526 9.68799 21.4984 9.6008C21.5443 9.5136 21.5725 9.41823 21.5815 9.32013C21.5905 9.22203 21.58 9.12312 21.5508 9.02905C20.5762 5.89532 18.1064 3.42555 14.9727 2.45093C14.9014 2.42759 14.827 2.41508 14.752 2.41382ZM9.22559 2.41479C9.15818 2.41787 9.0915 2.43002 9.02734 2.45093C5.89361 3.42556 3.42385 5.89532 2.44922 9.02905C2.41997 9.12312 2.40953 9.22204 2.4185 9.32014C2.42748 9.41825 2.45569 9.51362 2.50153 9.60082C2.54737 9.68802 2.60993 9.76534 2.68566 9.82836C2.76138 9.89138 2.84877 9.93886 2.94284 9.96811C3.03692 9.99735 3.13583 10.0078 3.23394 9.99879C3.33204 9.9898 3.42741 9.96157 3.51461 9.91572C3.6018 9.86988 3.67911 9.8073 3.74212 9.73157C3.80513 9.65584 3.85261 9.56844 3.88184 9.47437C4.70921 6.8141 6.81239 4.71092 9.47266 3.88354C9.64858 3.83171 9.79942 3.71722 9.89665 3.56172C9.99388 3.40622 10.0308 3.22048 10.0004 3.03962C9.96993 2.85876 9.8743 2.69532 9.73154 2.58019C9.58878 2.46505 9.40878 2.40622 9.22559 2.41479ZM16.1807 7.00464C16.1074 7.01133 16.0341 7.02862 15.9639 7.05737C15.5149 7.24237 11.5372 8.90294 10.2197 10.2214C8.90173 11.5394 7.24114 15.5166 7.05664 15.9656C6.94064 16.2471 7.00613 16.5714 7.22363 16.7859C7.36663 16.9269 7.5565 17.0017 7.75 17.0017C7.8495 17.0017 7.9504 16.9817 8.0459 16.9412C8.5074 16.7432 12.5873 14.9745 13.7803 13.782C14.9733 12.5895 16.742 8.50911 16.9395 8.04761C17.0595 7.76711 16.9982 7.44136 16.7842 7.22436C16.6229 7.06162 16.4004 6.98458 16.1807 7.00464ZM2.75 11.2517C2.55109 11.2517 2.36032 11.3307 2.21967 11.4714C2.07902 11.612 2 11.8028 2 12.0017C2 12.2006 2.07902 12.3914 2.21967 12.532C2.36032 12.6727 2.55109 12.7517 2.75 12.7517C2.94891 12.7517 3.13968 12.6727 3.28033 12.532C3.42098 12.3914 3.5 12.2006 3.5 12.0017C3.5 11.8028 3.42098 11.612 3.28033 11.4714C3.13968 11.3307 2.94891 11.2517 2.75 11.2517ZM12 11.2517C12.414 11.2517 12.75 11.5877 12.75 12.0017C12.75 12.4157 12.414 12.7517 12 12.7517C11.586 12.7517 11.25 12.4157 11.25 12.0017C11.25 11.5877 11.586 11.2517 12 11.2517ZM21.25 11.2517C21.0511 11.2517 20.8603 11.3307 20.7197 11.4714C20.579 11.612 20.5 11.8028 20.5 12.0017C20.5 12.2006 20.579 12.3914 20.7197 12.532C20.8603 12.6727 21.0511 12.7517 21.25 12.7517C21.4489 12.7517 21.6397 12.6727 21.7803 12.532C21.921 12.3914 22 12.2006 22 12.0017C22 11.8028 21.921 11.612 21.7803 11.4714C21.6397 11.3307 21.4489 11.2517 21.25 11.2517ZM3.15039 13.9919C3.03299 13.9938 2.91767 14.0232 2.81371 14.0778C2.70975 14.1324 2.62005 14.2106 2.55184 14.3062C2.48363 14.4018 2.43881 14.512 2.42099 14.6281C2.40316 14.7441 2.41283 14.8627 2.44922 14.9744C3.42385 18.1081 5.89361 20.5779 9.02734 21.5525C9.12141 21.5817 9.22032 21.5922 9.31842 21.5832C9.41652 21.5742 9.51189 21.546 9.59909 21.5002C9.68628 21.4543 9.7636 21.3917 9.82661 21.316C9.88963 21.2403 9.93711 21.1529 9.96635 21.0589C9.99559 20.9648 10.006 20.8659 9.99703 20.7678C9.98804 20.6697 9.95982 20.5743 9.91398 20.4871C9.86814 20.3999 9.80557 20.3226 9.72984 20.2596C9.65412 20.1966 9.56673 20.1491 9.47266 20.1199C6.81239 19.2925 4.70921 17.1893 3.88184 14.5291C3.83533 14.3719 3.73864 14.2343 3.60655 14.1373C3.47446 14.0403 3.31424 13.9893 3.15039 13.9919ZM20.8271 13.9919C20.6671 13.9941 20.512 14.0474 20.3845 14.1441C20.2569 14.2407 20.1636 14.3756 20.1182 14.5291C19.2908 17.1893 17.1876 19.2925 14.5273 20.1199C14.4333 20.1491 14.3459 20.1966 14.2702 20.2596C14.1944 20.3226 14.1319 20.3999 14.086 20.4871C14.0402 20.5743 14.012 20.6697 14.003 20.7678C13.994 20.8659 14.0044 20.9648 14.0337 21.0589C14.0629 21.1529 14.1104 21.2403 14.1734 21.316C14.2364 21.3917 14.3137 21.4543 14.4009 21.5002C14.4881 21.546 14.5835 21.5742 14.6816 21.5832C14.7797 21.5922 14.8786 21.5817 14.9727 21.5525C18.1064 20.5779 20.5762 18.1081 21.5508 14.9744C21.5878 14.8609 21.5971 14.7403 21.5781 14.6225C21.5591 14.5047 21.5123 14.3932 21.4416 14.2971C21.3708 14.201 21.2781 14.1232 21.1713 14.0702C21.0644 14.0171 20.9464 13.9903 20.8271 13.9919ZM12 20.5017C11.8011 20.5017 11.6103 20.5807 11.4697 20.7214C11.329 20.862 11.25 21.0528 11.25 21.2517C11.25 21.4506 11.329 21.6414 11.4697 21.782C11.6103 21.9227 11.8011 22.0017 12 22.0017C12.1989 22.0017 12.3897 21.9227 12.5303 21.782C12.671 21.6414 12.75 21.4506 12.75 21.2517C12.75 21.0528 12.671 20.862 12.5303 20.7214C12.3897 20.5807 12.1989 20.5017 12 20.5017Z"
              fill="#191C1D"
            />
          </svg>
        </div>
        <div className="text-zinc-900 text-xl font-medium font-['League Spartan'] leading-normal">
          Explore
        </div>
      </div>
    </a>
  );
}

