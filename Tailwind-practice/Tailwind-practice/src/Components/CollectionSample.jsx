<section className="max-w-screen-xl mx-auto py-12 px-8 place-items-center">
      {/* header */}
      <div className="text-center lg:p6">
        <h4 className="text-xl font-bold">New Collection</h4>
        <p className="max-w-md mt-4 mx-auto text-gray-500 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          atque suscipit quasi sint porro sapiente eius sequi officiis.
          Dignissimos, eligendi.
        </p>
      </div>
      {/* item lists */}
      <div className="grid grid-cols-1 gap-4 mt-8 text-white lg:grid-cols-3 ">
        {/* item 1 */}
        <div className="relative aspect-square">
          <img
            className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
          <div className="absolute font-medium bottom-5 left-5">
            <h4 className=" text-xl">Casual Trainers</h4>
            <button className="bg-slate-900 text-left text-xs py-3 px-5 mt-1.5">
              SHOP NOW
            </button>
          </div>
        </div>
        {/* item 2 */}
        <div className="relative aspect-square">
          <img
            className=" w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
          <div className="absolute font-medium bottom-5 left-5 ">
            <h4 className=" text-xl">Winter Jumpers</h4>
            <button className="bg-slate-900 text-left text-xs py-3 px-5 mt-1.5">
              SHOP NOW
            </button>
          </div>
        </div>
        {/* item 3 */}
        <div className="relative aspect-square lg:col-span-2 lg:row-start-1 lg:row-span-2 lg:col-start-2">
          <img
            className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
            alt=""
          />
          <div className="absolute font-medium bottom-5 left-5">
            <h4 className=" text-xl">Skinny Jeans Blue</h4>
            <button className="bg-slate-900 text-left text-xs py-3 px-5 mt-1.5">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>