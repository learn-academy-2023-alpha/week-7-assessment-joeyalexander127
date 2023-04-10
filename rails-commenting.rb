# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# the line beloew is a class that is representing a controller in ruby on rails.
#  a controller is a class where all CRUD actions are placed and handled.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # the line of code below is creating a global vaiables instance of our BlogPost table and returning all the data from that table by using .all
    @posts = BlogPost.all
  end

  # ---3)
  #  def show is an action that is used to return only a specific row of data from our table
  #  index and show always seemed reversed for me. It seems that show should show everything in that table and index should show just a specific row of data. Anyways, show requires an param because its only returned a specific piece of data from the table. Params usually use the column ID.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #  It is very easy to mix up new and create but def new only takes care of the form when creating a new instance in our database table. New does not touch the database. is strictly  the action in taking care of the form that we fill out to create a new row of data.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # the line below is creating a new global variable instance of our table BlogPost and calling it "@post" and is using the dot annotation to create a new row a data from what was placed into our form from our previous method <new> and then we are placing our blog_post_params that we created at the bottom of the class to make sure all attttibutes are required when creating a new entry in our DB table.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # similar with new/create how new doesnt touch the database it only controls the form and create is the actual actuion that takes care of the creating that new row of data. It is the same with edit and update. edit only takes care of the form and doesnt actually make changes to the database table. So the line below is create a new global vairable instance of our BlogPost called "@post" and is using find which requires a param of ID to know which row of data to populate on the page that we will eventually update.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # the line below is using the global vorable instance that we assigned to the which ever row of data was found within our ID param and it will take what ever update we changed as long as it meets the requriements of our parameter <blog_post_params> in our tabele.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      #  the line below is only redirecting us back to our <blog_posts_path> which is the page that is holding our our blog posts (plural and singlular matter) if the specific row of data was deleted. If something went wrong and the row of data was not deleted it will keep you on the current page.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  private
  def blog_post_params
    # ---10)
    #  this line of code in short is setting the requirements for creating or updating the DB table. The params method is used for accessing the data that was submitted in our HTTP request. the require lookins into our hash of key value pairs and makes sure blog_post can be found and if it cant be then it returns na error and then permit looks through our columun to make sure the only things being passed through our HTTP rrequest form is :title and :content. In summary the params is used to access the data that was submitted in our HTTP request and  the requires is looking into our hash and makes sure :blog_post key value can be found and permit is making sure the only values being submitted our :title and :content
    params.require(:blog_post).permit(:title, :content)
  end
end
