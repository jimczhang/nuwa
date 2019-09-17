import React from "react";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
import "./App.scss";

function App() {
  const { Sider } = Layout;

  return (
    <Layout className="mainLayout">
      <Sider className="sidebar">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="bar-chart" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="cloud-o" />
            <span className="nav-text">nav 5</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="appstore-o" />
            <span className="nav-text">nav 6</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="team" />
            <span className="nav-text">nav 7</span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="shop" />
            <span className="nav-text">nav 8</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="main">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat
        </p>
      </Layout>
    </Layout>
  );
}

export default App;
